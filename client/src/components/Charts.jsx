import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { dataModules } from "../static/data";

export function ChartKesdam() {
  const groupedData = dataModules.reduce((acc, item) => {
    if (!acc[item.satuan]) {
      acc[item.satuan] = 0;
    }
    acc[item.satuan]++;
    return acc;
  }, {});

  const categories = Object.keys(groupedData);
  const seriesData = Object.values(groupedData);
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Jumlah",
        data: seriesData,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#020617",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 700,
          },
        },
        categories: categories,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#020617",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <>
      <Card id="chart_kesdam">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
            <Square3Stack3DIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h4" color="black">
              Situasi Integrasi Seluruh Kesdam
            </Typography>
            <Typography
              variant="small"
              color="black"
              className="max-w-4xl font-normal"
            >
              Indikator capaian alur integrasi SIMRS diukur dari Jumlah
              Kesehatan Daerah Militer{" "}
              <span className="font-bold">(KESDAM)</span> berdasarkan API Yang
              Di Berikan RUMKIT Terkait.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </>
  );
}

export function ChartRalan({ data }) {
  
  const isToday = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const filteredData = data.filter(
    (item) => isToday(item.tgl_registrasi) && item.nm_poli !== "-" && item.stts
  );

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.nm_poli]) {
      acc[item.nm_poli] = 0;
    }
    acc[item.nm_poli]++;
    return acc;
  }, {});

  const categories = Object.keys(groupedData);
  const seriesData = Object.values(groupedData);

  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Jumlah",
        data: seriesData,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true, // Mengubah chart menjadi horizontal
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#020617",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: categories,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
          padding: {
            top: 5,
            right: 20,
          },
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <>
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
            <Square3Stack3DIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h4" color="black">
              Jumlah Data Rawat Jalan
            </Typography>
            <Typography
              variant="small"
              color="black"
              className="max-w-4xl font-normal"
            >
              Indikator capaian alur integrasi SIMRS diukur dari Jumlah
              Kesehatan Daerah Militer{" "}
              <span className="font-bold">(KESDAM)</span> berdasarkan API Yang
              Di Berikan RUMKIT Terkait.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
        {/* <CardFooter>
          <Typography>Jumlah Pasien </Typography>
        </CardFooter> */}
      </Card>
    </>
  );
}

export function ChartRanap() {
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true, // Mengubah chart menjadi horizontal
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#020617",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <>
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
            <Square3Stack3DIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h4" color="black">
              Jumlah Data Rawat Inap
            </Typography>
            <Typography
              variant="small"
              color="black"
              className="max-w-4xl font-normal"
            >
              Indikator capaian alur integrasi SIMRS diukur dari Jumlah
              Kesehatan Daerah Militer{" "}
              <span className="font-bold">(KESDAM)</span> berdasarkan API Yang
              Di Berikan RUMKIT Terkait.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </>
  );
}
