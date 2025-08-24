import BasicLineChart from "src/Components/LineChart";
import "../Common/css/styles.css";
import Stat_card from "../Components/StatCard";
import { MainCard } from "src/Components/Card";
import PieActiveArc from "src/Components/PieChart";
import DataTable from "src/Components/Table";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { PrimaryButton, SecondaryButton, SuccessButton, WarningButton } from "src/Components/CustomButtons";
import { CustomIcons } from "src/Assets/Icons/Icons";
import CustomAlert from "src/Components/Alerts";
import Spinner from "src/Components/Spinner";

interface TableProps {
  id: number;
  name: string;
  description: string;
  recordStatus: number;
}

export default function Dashboard() {

  const [list, setList] = useState<TableProps[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertDescription, setAlertDescription] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | "warning">("success");

  const [loading, setLoading] = useState(false);

  const showAlert = (description: string, type: "success" | "error" | "warning") => {
    setAlertDescription(description);
    setAlertType(type);
    setAlertOpen(true);
  };

  useEffect(() => {
    // Assign sample data when the component mounts
    setList([
      { id: 1, name: "Project Alpha", description: "A cutting-edge AI initiative.", recordStatus: 1 },
      { id: 2, name: "Project Beta", description: "Blockchain-based supply chain solution.", recordStatus: 2 },
      { id: 3, name: "Project Gamma", description: "Next-gen cloud computing framework.", recordStatus: 1 },
      { id: 4, name: "Project Delta", description: "Cybersecurity enhancement program.", recordStatus: 0 },
      { id: 5, name: "Project Epsilon", description: "IoT-driven smart city project.", recordStatus: 1 },
      { id: 6, name: "Project Epsilon", description: "IoT-driven smart city project.", recordStatus: 1 }
    ]);
  }, []);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    {
      field: "recordStatus",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <span style={{ color: params.value === 1 ? "green" : "red" }}>
          {params.value === 1 ? "Active" : "Inactive"}
        </span>
      ),
    },
  ];

  const handleRowClick = async (id: number) => {
    setSelectedId(id)
  }

  const btnClickSave = () => {
    showAlert("Save Completed", "success")
  }

  const btnClickUpdate = () => {
    showAlert("Some Records Missing", "warning")
  }

  const btnClickDownload = () => {
    showAlert("Downloaded", "success")
  }

  const btnClickDelete = () => {
    showAlert("Example Error", "error")
  }

  return (
    <div className="comman-outer">
      <CustomAlert
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        description={alertDescription}
        type={alertType}
        timeout={3000}
      />
      <Spinner isLoading={loading} />
      <div className="comman-header-outer">
        <span className="content-title-text">Sample Stat Cards</span>
      </div>
      <div className="space-bar"></div>
      <div className="stat-cards-outer">
        <div className="stat-cards-inner">
          <Stat_card
            title="Total Page Views"
            total="4,42,236"
            percentage="59.3%"
            footerText="You made an extra 20,000 this week"
            isTrendingUp={true}
          />
        </div>
        <div className="stat-cards-inner">
          <Stat_card
            title="Total Users"
            total="78,250"
            percentage="70.5%"
            footerText="You made an extra 8,900 this week"
            isTrendingUp={true}
          />
        </div>
        <div className="stat-cards-inner">
          <Stat_card
            title="Total Orders"
            total="18,800"
            percentage="27.4%"
            footerText="You made an extra 1,943 this week"
            isTrendingUp={false}
          />
        </div>

        <div className="stat-cards-inner">
          <Stat_card
            title="Total Page Views"
            total="$35,700"
            percentage="27.4%"
            footerText="You made an extra $10,100 this week"
            isTrendingUp={false}
          />
        </div>
      </div>
      <div className="space-bar"></div>
      <div className="content-main-outer">
        <div className="content-main-inner cmi1">
          <div className="content-title">
            <span className="content-title-text">Sample Line Graph</span>
          </div>
          <div className="space-bar"></div>
          <MainCard>
            <BasicLineChart />
          </MainCard>
        </div>
        <div className="content-main-inner cmi2">
          <div className="content-title">
            <span className="content-title-text">Sample Pie Chart</span>
          </div>
          <div className="space-bar"></div>
          <MainCard>
            <div className="piechart-outer">
              <PieActiveArc />
            </div>
          </MainCard>
        </div>
      </div>
      
      <div className="content-title">
        <span className="content-title-text">Sample Buttons</span>
      </div>
      <div className="space-bar"></div>
      <div className="content-main-outer">
        <MainCard width="100%">
          <>
            <PrimaryButton
              name="Save"
              icon={CustomIcons.Add}
              disabled={false}
              onClick={btnClickSave} />

            .

            <SecondaryButton
              name="Update"
              icon={CustomIcons.Update}
              disabled={false}
              onClick={btnClickUpdate} />

            .

            <WarningButton
              name="Delete"
              icon={CustomIcons.Delete}
              disabled={false}
              onClick={btnClickDelete} />

            .

            <SuccessButton
              name="Download"
              icon={CustomIcons.Download}
              disabled={false}
              onClick={btnClickDownload} />
          </>
        </MainCard>
      </div>
      <div className="space-bar"></div>

      <div className="content-title">
        <span className="content-title-text">Table Structure</span>
      </div>
      <div className="space-bar"></div>
      <div className="content-main-outer">
        <MainCard width="100%">
          <DataTable data={list} columns={columns} onRowClick={(row) => handleRowClick(row.id)} selectedRowId={selectedId} pageSize={5} />
        </MainCard>
      </div>
      <div className="space-bar"></div>

    </div>
  );
}
