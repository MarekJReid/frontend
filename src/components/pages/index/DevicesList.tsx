import devicesArray from "../../../data/devices.json";
import { Table } from "../../dynamic/table/Table";

function DevicesList() {
  return (
    <div className="DevicesList">
      <Table
        data={devicesArray}
        headers={{
          id: "Device ID",
          displayName: "Name",
          // ... other headers
        }}
        renderers={{
          lastActivity: (dateString: string) => (
            <span>{new Date(dateString).toLocaleDateString()}</span>
          ),
          // ... other custom renderers if needed
        }}
      />
    </div>
  );
}

export default DevicesList;
