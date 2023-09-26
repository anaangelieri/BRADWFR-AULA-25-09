const Param = props => {
    const {id} = useParams()
    return(
    <>
    <div className="NotFound">
        <h1>Componente Param</h1>
        <p>Parametro {id}</p>
    </div>
    </>
    )
}
export default Param;