import useGenres from '../hooks/useGenres';

const GenereList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map(d => <li key={d.id}>{d.name}</li>)}
    </ul>
  )
}

export default GenereList