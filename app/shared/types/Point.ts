interface Point {
  id: string
  title: string
  description: string
  location: {
    latitude: number
    longitude: number
  }
  address: string
  phone: string
  email: string
  website: string
  hours: string
  status: string
}

export default Point
