import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UpcomingGames() {
  const upcomingGames = [
    {
      date: "Jan 9, 2024",
      opponent: "Sacramento",
      time: "7:30 PM",
      location: "Home"
    },
    {
      date: "Jan 12, 2024",
      opponent: "Philadelphia",
      time: "7:00 PM",
      location: "Away"
    },
    {
      date: "Jan 14, 2024",
      opponent: "Boston",
      time: "6:00 PM",
      location: "Away"
    },
    {
      date: "Jan 17, 2024",
      opponent: "Miami",
      time: "7:30 PM",
      location: "Home"
    },
    {
      date: "Jan 19, 2024",
      opponent: "Chicago",
      time: "7:30 PM",
      location: "Home"
    }
  ]

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-500"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/>
          </svg>
          Toronto Raptors Upcoming Games
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Opponent</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingGames.map((game, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{game.date}</TableCell>
                <TableCell>{game.opponent}</TableCell>
                <TableCell>{game.time}</TableCell>
                <TableCell>{game.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

