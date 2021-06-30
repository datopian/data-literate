const papa = require("papaparse")

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
export default function Table({ data=[], cols=[], csv='' }) {
  if (csv) {
    csv = csv.trim()
    const rawdata = papa.parse(csv, {header: true})
    data = rawdata.data
    cols = rawdata.meta.fields.map((r,i) => {
      return { key: r, name: r }
    })
  }

	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>{cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
				</thead>
				<tbody>
					{data.map((r,i) => <tr key={i}>
						{cols.map(c => <td key={c.key}>{ r[c.key] }</td>)}
					</tr>)}
				</tbody>
			</table>
		</div>
	)
}
