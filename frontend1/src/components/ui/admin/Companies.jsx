import React from 'react'
import { Input } from '@material-tailwind/react'
import { Button } from '../button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='max-w-6xl  mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-48 sm:w-64"
            placeholder="Filter by name"
          />
          <Button onClick = {() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable/>
      </div>
    </div>

  )
}

export default Companies




