import React from 'react'

const Page = () => {

    const handleForm = async (formData) =>{
        "use server"
        console.log(formData)
        const username = formData.get("username")
        console.log("HEllo " , username)
    }

  return (
    <div>
      <form action={handleForm}>
        <input type='text' name='username'/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Page
