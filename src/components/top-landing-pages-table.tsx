import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  { page: '/home', visits: 5000, bounceRate: '32%' },
  { page: '/products', visits: 3500, bounceRate: '28%' },
  { page: '/blog', visits: 2800, bounceRate: '35%' },
  { page: '/about', visits: 1500, bounceRate: '40%' },
]

export function TopLandingPagesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Page</TableHead>
          <TableHead>Visits</TableHead>
          <TableHead>Bounce Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.page}>
            <TableCell>{row.page}</TableCell>
            <TableCell>{row.visits}</TableCell>
            <TableCell>{row.bounceRate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

