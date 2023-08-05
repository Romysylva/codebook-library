

const Counter = (props) => {
    
    const formatCount = () => {
        const {value} = props.counter
        return value === 0 ? "Zero" : value;
    }
    const changeBg = () => {
        let classes = "m-2 p-2 light__c warm- ";
        classes += props.counter.value === 0 ? " warn__c" : "prim__c";
        return classes

    };

    return (
        <>
            <div className="counter__container">
                <span
                className={changeBg()}>
                {formatCount()}</span>
                <button 
                className="sec__c light__c p-3 " 
                onClick={() => props.onIncrement(props.counter)}>increment</button>
                <button 
                className="sec__c light__c p-3 m-2" 
                onClick={() => props.onDecrement(props.counter)}>Decrement</button>
                <button 
                className="danger__c light__c p-3 m-2" 
                onClick={() => props.onDelete(props.counter.id)}>delete</button>
            </div>
        </>
    );

}
export default Counter; 