import agent from './agent.json'
const RoomActivityPage = () => {
  const res = []
  const agentdata = agent.drawPanelData
  for (const i in agentdata) {
    const currentdata = agentdata[i]
    const datatype = currentdata.type
    switch (datatype) {
      case 'IMAGE': {
        const url: any = currentdata.data
        res.push(
          <img
            src={url}
            key={currentdata.id}
            style={{
              position: 'absolute',
              width: currentdata.width,
              height: currentdata.height,
              left: currentdata.left,
              top: currentdata.top,
            }}
          />,
        )
        break
      }
      case 'TEXT': {
        const content: any = currentdata.data
        res.push(
          <p
            key={currentdata.id}
            style={{
              position: 'absolute',
              width: currentdata.width,
              height: currentdata.height,
              left: currentdata.left,
              top: currentdata.top,
              fontSize: currentdata.fontSize,
              color: currentdata.color,
            }}
          >
            {content}
          </p>,
        )
      }
    }
  }
  return <div>{res}</div>
}
export default RoomActivityPage
