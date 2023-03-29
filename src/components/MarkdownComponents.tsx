/** Any component exported from this file will be usable in an MDX file */

export { Contents } from "./posts/Contents";
export { Navigation } from "./posts/Navigation";
import { List } from "@ouellettec/design-system";

/* Below are all the MDX components that are overwritten with a Design System component */

/* List */
function Ol(props: any): JSX.Element {
  return <List ordered listStyle="number" {...props} />;
}
const ol = Ol;
function Ul(props: any): JSX.Element {
  return <List listStyle="bullet" {...props} />;
}
const ul = Ul;
const li = (props: any): JSX.Element => {
  return <List.Item {...props} />;
};

export { ul, ol, li };
