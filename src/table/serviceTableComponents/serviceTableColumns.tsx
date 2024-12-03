import { ColumnDef } from "@tanstack/react-table";

export type ServiceTableType = {
  appointment_name: string;
  start_time: string;
  end_time: string;
  no_of_parallel_slots: string;
  duration: string;
  action: string;
};

export const service_columns: ColumnDef<ServiceTableType>[] = [
  {
    id: "appointment_name",
    header: "Appointment Name",
    accessorKey: "appointment_name",
  },
  {
    id: "start_time",
    header: "Start TIme",
    accessorKey: "start_time",
  },
  {
    id: "end_time",
    header: "End Time",
    accessorKey: "end_time",
  },
  {
    id: "no_of_parallel_slots",
    header: "No of Parallel Slots",
    accessorKey: "no_of_parallel_slots",
  },
  {
    id: "duration",
    header: "Duration",
    accessorKey: "duration",
  },
  {
    id: "action",
    header: "Action",
    accessorKey: "action",
  },
];

export const service_mock_data: ServiceTableType[] = [
  {
    appointment_name: "jcb",
    start_time: "3:53 AM",
    end_time: "10:56 AM",
    no_of_parallel_slots: "62-676-4174",
    duration: "12:01 PM",
    action: "1833",
  },
  {
    appointment_name: "jcb",
    start_time: "6:27 AM",
    end_time: "2:16 AM",
    no_of_parallel_slots: "54-174-5558",
    duration: "1:20 PM",
    action: "72",
  },
  {
    appointment_name: "jcb",
    start_time: "3:44 PM",
    end_time: "3:58 AM",
    no_of_parallel_slots: "58-405-4408",
    duration: "7:07 AM",
    action: "312",
  },
  {
    appointment_name: "diners-club-enroute",
    start_time: "9:58 PM",
    end_time: "10:50 PM",
    no_of_parallel_slots: "01-094-4539",
    duration: "3:57 AM",
    action: "3433",
  },
  {
    appointment_name: "jcb",
    start_time: "11:41 AM",
    end_time: "5:36 PM",
    no_of_parallel_slots: "57-799-3357",
    duration: "5:53 PM",
    action: "935",
  },
  {
    appointment_name: "bankcard",
    start_time: "11:31 PM",
    end_time: "3:26 AM",
    no_of_parallel_slots: "54-778-7177",
    duration: "6:35 AM",
    action: "765",
  },
  {
    appointment_name: "jcb",
    start_time: "11:20 AM",
    end_time: "10:15 AM",
    no_of_parallel_slots: "81-649-0969",
    duration: "12:06 AM",
    action: "459",
  },
  {
    appointment_name: "maestro",
    start_time: "4:49 PM",
    end_time: "3:24 PM",
    no_of_parallel_slots: "06-341-2387",
    duration: "5:12 AM",
    action: "24",
  },
  {
    appointment_name: "laser",
    start_time: "9:32 AM",
    end_time: "8:02 AM",
    no_of_parallel_slots: "81-888-6018",
    duration: "9:49 PM",
    action: "3510",
  },
  {
    appointment_name: "diners-club-enroute",
    start_time: "12:40 PM",
    end_time: "11:03 PM",
    no_of_parallel_slots: "41-306-8492",
    duration: "11:15 AM",
    action: "98",
  },
  {
    appointment_name: "jcb",
    start_time: "3:11 PM",
    end_time: "1:01 PM",
    no_of_parallel_slots: "61-477-3431",
    duration: "12:32 AM",
    action: "1069",
  },
  {
    appointment_name: "diners-club-us-ca",
    start_time: "7:43 AM",
    end_time: "9:38 PM",
    no_of_parallel_slots: "35-229-2847",
    duration: "6:10 PM",
    action: "5763",
  },
  {
    appointment_name: "switch",
    start_time: "1:31 AM",
    end_time: "4:41 AM",
    no_of_parallel_slots: "67-507-2929",
    duration: "6:21 AM",
    action: "12",
  },
  {
    appointment_name: "jcb",
    start_time: "5:18 AM",
    end_time: "3:21 PM",
    no_of_parallel_slots: "76-046-1241",
    duration: "9:41 AM",
    action: "3901",
  },
  {
    appointment_name: "jcb",
    start_time: "1:13 PM",
    end_time: "7:42 AM",
    no_of_parallel_slots: "28-322-2254",
    duration: "12:07 AM",
    action: "350",
  },
  {
    appointment_name: "bankcard",
    start_time: "4:05 AM",
    end_time: "4:43 PM",
    no_of_parallel_slots: "57-665-2871",
    duration: "11:38 AM",
    action: "1443",
  },
  {
    appointment_name: "jcb",
    start_time: "10:25 PM",
    end_time: "1:06 AM",
    no_of_parallel_slots: "34-193-2333",
    duration: "5:02 AM",
    action: "320",
  },
  {
    appointment_name: "jcb",
    start_time: "7:17 AM",
    end_time: "4:21 PM",
    no_of_parallel_slots: "73-616-5223",
    duration: "7:06 AM",
    action: "41",
  },
  {
    appointment_name: "maestro",
    start_time: "6:43 PM",
    end_time: "7:49 PM",
    no_of_parallel_slots: "04-080-9683",
    duration: "10:02 AM",
    action: "591",
  },
  {
    appointment_name: "diners-club-enroute",
    start_time: "11:21 PM",
    end_time: "12:41 AM",
    no_of_parallel_slots: "40-836-8412",
    duration: "10:28 PM",
    action: "925",
  },
  {
    appointment_name: "jcb",
    start_time: "10:45 PM",
    end_time: "3:09 PM",
    no_of_parallel_slots: "55-923-3768",
    duration: "5:39 PM",
    action: "453",
  },
  {
    appointment_name: "bankcard",
    start_time: "9:34 AM",
    end_time: "4:00 PM",
    no_of_parallel_slots: "70-475-0430",
    duration: "4:02 PM",
    action: "17",
  },
  {
    appointment_name: "maestro",
    start_time: "5:55 AM",
    end_time: "5:41 AM",
    no_of_parallel_slots: "55-607-2009",
    duration: "5:21 PM",
    action: "103",
  },
  {
    appointment_name: "maestro",
    start_time: "10:37 PM",
    end_time: "5:30 AM",
    no_of_parallel_slots: "45-381-5530",
    duration: "4:41 PM",
    action: "251",
  },
  {
    appointment_name: "jcb",
    start_time: "9:21 AM",
    end_time: "3:54 PM",
    no_of_parallel_slots: "06-653-1831",
    duration: "3:16 PM",
    action: "82",
  },
  {
    appointment_name: "jcb",
    start_time: "9:22 AM",
    end_time: "12:18 AM",
    no_of_parallel_slots: "79-433-6110",
    duration: "11:34 PM",
    action: "1850",
  },
  {
    appointment_name: "switch",
    start_time: "10:45 PM",
    end_time: "3:15 AM",
    no_of_parallel_slots: "91-733-2461",
    duration: "1:57 AM",
    action: "5772",
  },
  {
    appointment_name: "americanexpress",
    start_time: "3:10 PM",
    end_time: "7:12 AM",
    no_of_parallel_slots: "80-792-5721",
    duration: "8:47 AM",
    action: "449",
  },
  {
    appointment_name: "jcb",
    start_time: "7:43 PM",
    end_time: "5:54 AM",
    no_of_parallel_slots: "58-360-4262",
    duration: "8:21 AM",
    action: "750",
  },
  {
    appointment_name: "mastercard",
    start_time: "8:45 AM",
    end_time: "3:57 PM",
    no_of_parallel_slots: "33-124-4889",
    duration: "8:12 AM",
    action: "38",
  },
  {
    appointment_name: "jcb",
    start_time: "2:50 AM",
    end_time: "4:10 AM",
    no_of_parallel_slots: "20-392-3641",
    duration: "5:52 AM",
    action: "5700",
  },
  {
    appointment_name: "jcb",
    start_time: "5:24 PM",
    end_time: "2:32 PM",
    no_of_parallel_slots: "07-105-9402",
    duration: "11:50 AM",
    action: "354",
  },
  {
    appointment_name: "instapayment",
    start_time: "8:34 AM",
    end_time: "3:13 PM",
    no_of_parallel_slots: "60-539-3107",
    duration: "11:14 AM",
    action: "600",
  },
  {
    appointment_name: "jcb",
    start_time: "3:01 PM",
    end_time: "8:54 AM",
    no_of_parallel_slots: "08-561-9142",
    duration: "12:54 PM",
    action: "417",
  },
  {
    appointment_name: "jcb",
    start_time: "11:20 AM",
    end_time: "9:04 PM",
    no_of_parallel_slots: "92-757-4753",
    duration: "6:47 PM",
    action: "145",
  },
  {
    appointment_name: "mastercard",
    start_time: "3:23 PM",
    end_time: "8:23 AM",
    no_of_parallel_slots: "75-788-3340",
    duration: "4:46 AM",
    action: "49",
  },
  {
    appointment_name: "mastercard",
    start_time: "3:37 PM",
    end_time: "8:16 PM",
    no_of_parallel_slots: "45-460-0331",
    duration: "6:06 PM",
    action: "2038",
  },
  {
    appointment_name: "diners-club-enroute",
    start_time: "1:27 AM",
    end_time: "11:20 PM",
    no_of_parallel_slots: "57-046-6160",
    duration: "7:23 PM",
    action: "58",
  },
  {
    appointment_name: "jcb",
    start_time: "9:19 AM",
    end_time: "3:51 AM",
    no_of_parallel_slots: "56-205-4244",
    duration: "10:07 PM",
    action: "95",
  },
  {
    appointment_name: "bankcard",
    start_time: "2:47 AM",
    end_time: "4:42 PM",
    no_of_parallel_slots: "07-426-7597",
    duration: "5:44 PM",
    action: "1969",
  },
  {
    appointment_name: "jcb",
    start_time: "3:52 AM",
    end_time: "12:52 AM",
    no_of_parallel_slots: "62-493-4398",
    duration: "7:32 PM",
    action: "790",
  },
  {
    appointment_name: "jcb",
    start_time: "2:30 AM",
    end_time: "10:42 PM",
    no_of_parallel_slots: "48-877-0424",
    duration: "6:44 AM",
    action: "3245",
  },
  {
    appointment_name: "jcb",
    start_time: "9:57 AM",
    end_time: "12:11 AM",
    no_of_parallel_slots: "50-329-2027",
    duration: "5:53 AM",
    action: "241",
  },
  {
    appointment_name: "jcb",
    start_time: "8:34 AM",
    end_time: "5:09 AM",
    no_of_parallel_slots: "75-674-4618",
    duration: "12:19 PM",
    action: "112",
  },
  {
    appointment_name: "jcb",
    start_time: "7:20 PM",
    end_time: "9:10 AM",
    no_of_parallel_slots: "16-814-5703",
    duration: "5:40 AM",
    action: "673",
  },
  {
    appointment_name: "jcb",
    start_time: "4:45 PM",
    end_time: "11:57 PM",
    no_of_parallel_slots: "50-936-6762",
    duration: "7:22 PM",
    action: "100",
  },
  {
    appointment_name: "maestro",
    start_time: "1:54 PM",
    end_time: "4:33 AM",
    no_of_parallel_slots: "05-611-3178",
    duration: "3:50 PM",
    action: "162",
  },
  {
    appointment_name: "visa",
    start_time: "5:54 PM",
    end_time: "1:59 AM",
    no_of_parallel_slots: "77-505-1860",
    duration: "3:03 AM",
    action: "151",
  },
  {
    appointment_name: "mastercard",
    start_time: "4:32 AM",
    end_time: "5:42 PM",
    no_of_parallel_slots: "96-924-4267",
    duration: "11:21 AM",
    action: "70",
  },
  {
    appointment_name: "visa-electron",
    start_time: "10:04 AM",
    end_time: "1:58 AM",
    no_of_parallel_slots: "67-404-8168",
    duration: "9:06 PM",
    action: "60",
  },
];
