import React from 'react'

const Profile = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen font-serif bg-slate-900">
          <div className="relative group flex items-center justify-center flex-col h-[470px] w-[380px] border-[5px] border-t-blue-700 border-b-blue-700 border-r-purple-700 border-l-purple-700 rounded-lg">
            <img src="https://media.istockphoto.com/id/1843090741/photo/unhappy-businesswoman-work-using-laptop-sitting-on-couch-at-home-exhausted-american-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=TjSyvyBoAMZIwDETR7eBVuQvZ72EqlCNCqbiiHkZaf4=" alt="" className="w-full h-full object-cover absolute group-hover:-translate-y-1/3 group-hover:scale-75 group-hover:rounded-full transition-transform dutation-[6000]" />
            <div className="items-center justify-center flex-col hidden group-hover:block group-hover:translate-y-20">
              <h1 className="font-bold text-center text-white text-3xl"> Wandia Githinji</h1>
              <h3 className="font-bold text-center text-purple-600 text-2xl"> CEO TechiGracieKE</h3>
              <p className="text-lg text-white tracking-tight text-center"> Dedicated towards making your codding journey exiting!</p>
            </div>
          </div>
        </div>
      )
}

export default Profile
