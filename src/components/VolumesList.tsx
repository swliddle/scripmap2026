import { useParams } from "react-router-dom";
import { useScripturesDataContext } from "../context/ScripturesDataContextHook";
import LoadingIndicator from "./LoadingIndicator";
import VolumeComponent from "./VolumeComponent";
import "./VolumesList.css";

export default function VolumesList(props: React.ComponentProps<"div">) {
    const { isLoading, volumes } = useScripturesDataContext();
    const { volumeId } = useParams();
    const volumeIdNumber = Number(volumeId);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <div className="volumesListComponent">
            {volumes.map((volume) =>
                isNaN(volumeIdNumber) || volumeIdNumber === volume.id ? (
                    <VolumeComponent volume={volume} key={`vk${volume.id}`} {...props} />
                ) : null
            )}
        </div>
    );
}
