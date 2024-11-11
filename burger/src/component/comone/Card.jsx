export default function Card(props) {
    return (
        <div>
            <div class="col">
                <div class="card shadow-sm">
                    <img  src={props.img}></img>
                    <div class="card-body">
                        <p class="card-text">{props.title}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            </div>
                            <small class="text-body-secondary">{props.price}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}