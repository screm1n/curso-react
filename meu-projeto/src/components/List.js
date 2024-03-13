import Item from './Item'

function List() {
    return (
        <> 
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1953} />
                <Item marca="Porsche" lancamento={1940} />
                <Item marca="Lamborghini" lancamento={1920} />
            </ul>
        </>
    )
}

export default List