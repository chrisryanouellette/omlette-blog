/** Any component exported from this file will be usable in an MDX file */

export { Contents } from "./posts/Contents";
export { Navigation } from "./posts/Navigation";
import { List } from "@ouellettec/design-system";

/* Below are all the MDX components that are overwritten with a Design System component */
const ul = List;
const li = (props: any): JSX.Element => (
  <List.Item listStyle="bullet" {...props} />
);

export { ul, li };
