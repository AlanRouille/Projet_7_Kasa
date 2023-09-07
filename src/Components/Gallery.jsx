import datas from '../Datas/Appart'
import Card from '../Components/Card'

export default function Gallery() {
  return (
    <main className="home_gallery">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        )
      })}
    </main>
  )
}
