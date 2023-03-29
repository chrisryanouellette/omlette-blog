import {
  Button,
  Checkbox,
  Collapse,
  Form,
  UpdateEvent,
  useForm,
} from "@ouellettec/design-system";
import { useCallback, useEffect } from "react";
import { useMdxContext } from "./Context";
import { useReadingList } from "./useReadingList";

type ContentsForm = {
  [key: number]: boolean;
};

/**
 * A component for allowing the user to track where they are within the blog.
 * Aka a fancy bookmark
 */
export function Contents(): JSX.Element {
  const { allPostTitles, length } = useMdxContext();
  const collapse = Collapse.useCollapse();
  const storage = useReadingList();
  const form = useForm<ContentsForm>();
  const pages = [...new Array(length)].map((_, i) => i);

  const handleChange = useCallback<UpdateEvent<ContentsForm>>(
    (field, value) => {
      storage.set({ [field]: value });
    },
    [storage]
  );

  useEffect(() => {
    const store = storage.get();
    const data: ContentsForm = {};
    Object.entries(store).forEach(
      ([key, value]) => (data[Number(key)] = value)
    );
    form.setMany(data);
  }, [form, storage]);

  return (
    <>
      <Collapse collapse={collapse}>
        <Collapse.Trigger size="sm" className="mb-4 pl-4">
          Blog Contents <Collapse.Carrot href="/remixicon.symbol.svg" />
        </Collapse.Trigger>
        <Collapse.Panel
          containerProps={{
            className:
              "absolute -mt-2 w-full sm:w-3/4 lg:w-1/2 drop-shadow-md border border-slate-200 z-10",
          }}
          unmountChildren={false}
        >
          <div className="px-4 py-2">
            <p className="mb-2 text-lg">Reading List</p>
            <Form form={form} onUpdate={handleChange}>
              {pages.map((index) => (
                <Form.Item key={index} name={index.toString()} inline>
                  <Checkbox label={allPostTitles[index]} />
                </Form.Item>
              ))}
            </Form>
            <Button size="md" className="mt-2 w-full" onClick={collapse.toggle}>
              Close
            </Button>
          </div>
        </Collapse.Panel>
      </Collapse>
    </>
  );
}
