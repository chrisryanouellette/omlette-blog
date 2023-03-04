import { Blog } from "@/types";

type PostInfoProps = {
  title: Blog["title"];
  date: Blog["date"];
  summary: Blog["summary"];
};

export function PostInfo({ date, summary, title }: PostInfoProps): JSX.Element {
  return (
    <div>
      <p className="text-slate-600 md:text-sm">{date}</p>
      <p className="text-3xl font-semibold text-slate-900 sm:text-2xl">
        {title}
      </p>
      {summary ? <p className="text-slate-600 md:text-sm">{summary}</p> : null}
    </div>
  );
}
