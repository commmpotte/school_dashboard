import { Routes, Route } from 'react-router-dom'
import Profile from './Profile'
import News from './News'
import Schedule from './Schedule'
import Students from './Students'
import NotFound from './NotFound'

const Content = () => {
  return (
    <Routes>
      <Route path="/news" element={<News />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/students" element={<Students />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Content