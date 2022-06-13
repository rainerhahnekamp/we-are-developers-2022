import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Workshop } from "data/workshops";
import { findWorkshops } from "~/server/workshops";

interface LoaderData {
  workshops: Workshop[];
}

export const loader: LoaderFunction = async () => {
  const workshops = await findWorkshops();
  return json<LoaderData>({ workshops });
};

export default function WorkshopsIndex() {
  const { workshops } = useLoaderData<LoaderData>();
  return (
    <ul className="text-center">
      {workshops.map((workshop, ix) => (
        <li key={ix}>
          <Link className="link" to={"./" + workshop.id}>
            {workshop.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
