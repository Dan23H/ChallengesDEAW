export const GifItem = ({title,url}) => {
    return (
        <div className="GifCSS">
            <img src={url} alt={title} />
        </div>
    )
}