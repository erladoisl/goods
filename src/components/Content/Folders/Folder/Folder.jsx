import { NavLink } from "react-router-dom";

const Folder = (props) => {
  return (
    <>
      <td className="col-6">
        <NavLink
          to="/content"
          state={{
            folder_id: props.item.id,
            parent_folder_id: props.parent_folder_id,
          }}
          className="link-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="m-2 bi bi-arrow-90deg-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"
            />
          </svg>
          {props.item.name}
        </NavLink>
      </td>
      <td></td>
      <td></td>
    </>
  );
};

export default Folder;
