import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

type ViewProps = {
  id: string;
};

const View = async ({ id }: ViewProps) => {
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // NOTE - Update the number of views
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2 ">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views : {views} </span>
      </p>
    </div>
  );
};
export default View;
