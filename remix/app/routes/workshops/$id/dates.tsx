import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { Lab, WorkshopDate } from "data/workshops";
import { findWorkshops } from "~/server/workshops";

interface LoaderData {
  dates: WorkshopDate[];
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

  return json<LoaderData>({ dates: workshop.dates });
};

export default function WorkshopsLabs() {
  const { dates } = useLoaderData<LoaderData>();
  return (
    <ul>
      {dates.map((date) => (
        <li key={date.id}>
          {date.from} - {date.to}
        </li>
      ))}
    </ul>
  );
}
