import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '@md-schemas/searchBarSchema'
import Search from '@md-icons/search.svg'
import Input from '@md-components/Input'
import Button from '@md-components/Button'

interface IFormValues {
  query: string
}

function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='search'
        name='query'
        placeholder='Search...'
        Icon={Search}
        register={register}
        error={errors.query}
      />
      <Button type='submit'>Search</Button>
    </form>
  )
}

export default SearchBar
