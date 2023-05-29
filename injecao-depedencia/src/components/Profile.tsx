interface ProfileProps {
  name?: string
  email?: string
}

const Profile = ({name, email}: ProfileProps) => {
  return ( 
    <div className="flex gap-3">
      <p className="text-slate-900 font-medium">{name}</p>
      <p className="text-slate-900 font-medium">{email}</p>
    </div>
  )
}
 
export default Profile