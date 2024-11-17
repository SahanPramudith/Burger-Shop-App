export default function MainCard(props) {
    return (
        <div>
                <a href="#">
                    <img class="p-8 rounded-t-lg" src={props.img} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.des}</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">RS.{props.price}</span>
                    </div>
                </div>
            

        </div>
    )
}