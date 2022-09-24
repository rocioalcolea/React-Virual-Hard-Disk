import { useContext } from "react";
import ListFile from "../components/ListFile";
import NewFolderModal from "../components/NewFolderModal";
import UploadFileModal from "../components/UploadFileModal ";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { user, token } = useContext(AuthContext);

  return (
    <>
      {user && token && (
        <div className="Lista">
          <NewFolderModal />
          <UploadFileModal />

          <ListFile />
        </div>
      )}
    </>
  );
}
