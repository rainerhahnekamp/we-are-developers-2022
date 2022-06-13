import { json, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Workshop } from "data/workshops";
import { findWorkshops } from "~/server/workshops";

interface LoaderData {
  workshop: Workshop;
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
  return json<LoaderData>({
    workshop,
  });
};

export default function Workshop() {
  const { workshop } = useLoaderData();
  return (
    <div>
      <h3 className="font-bold text-gray-900">
        <Link to=".">{workshop.title}</Link>
      </h3>
      <ul className="flex justify-evenly">
        <li className="link">
          <Link to="./labs">Labs</Link>
        </li>
        <li className="link">
          <Link to="./dates">Dates</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
