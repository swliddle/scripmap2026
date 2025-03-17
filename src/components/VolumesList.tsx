import { useScripturesDataContext } from "../context/ScripturesDataContextHook";
import LoadingIndicator from "./LoadingIndicator";
import VolumeComponent from "./VolumeComponent";
import "./VolumesList.css";

export default function VolumesList(props: React.ComponentProps<"div">) {
    const { isLoading, volumes } = useScripturesDataContext();

    return isLoading ? (
        <LoadingIndicator />
    ) : (
        <div className="volumesListComponent">
            {volumes.map((volume) => (
                <VolumeComponent volume={volume} key={`vk${volume.id}`} {...props} />
            ))}
        </div>
    );
}
