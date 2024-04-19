import { Form, PrefetchPageLinks, useFetcher } from "@remix-run/react";
import type { loader as resourceLoader } from "./resource";
import { ActionFunctionArgs } from "@remix-run/node";

export function action({request}: ActionFunctionArgs) {
  return  {}
}
  
export default function Index() {
  let fetcher = useFetcher<typeof resourceLoader>({key: "hihih"});


  return (
    <>
      <PrefetchPageLinks page="/resource" />
      <button type="button" onClick={() => fetcher.load("/resource")}>
        Load Data
      </button>
      {fetcher.data && <DisplayData data={fetcher.data} />}



      <Form method="post">
        
        <button type="submit">Create Todo</button>
      </Form>
    </>
  );
}

function DisplayData({ data }: { data: { message: string } }) {
  return <p>{data.message}</p>;
}