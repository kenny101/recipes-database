class SimplestSampleComponent extends React.Component {


    render() {
        return (
            <div>
                <div className="btn-group">
                    {this.renderButtons()}
                </div>
                <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                    {this.renderItems()}
                </AutoResponsive>
            </div>
        );
    }
}