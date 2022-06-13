import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { Lab } from "data/workshops";
import { findWorkshops } from "~/server/workshops";

interface LoaderData {
  labs: Lab[];
}

export const loader: LoaderFunction = async ({ params }) => {
  const workshops = await findWorkshops();
  const id = +(params.id || 0);

  if (id === 0) {
    throw new Error("missing id");
  }

  const workshop = workshops.find((workshop) => workshop.id === id);

  if (workshop === undefined) {
    throw new Error("cannot find workshop");
  }

  return json<LoaderData>({ labs: workshop.labs });
};

export default function WorkshopsLabs() {
  const { labs } = useLoaderData<LoaderData>();
  return (
    <ul>
      {labs.map((lab) => (
        <li key={lab.id}>{lab.title}</li>
      ))}
    </ul>
  );
}
