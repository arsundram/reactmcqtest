var React =  require('react');

var RadioInput = React.createClass( {
    handleClick: function() {
        this.props.onChoiceSelect( this.props.choice );
    },
    render: function() {
        var disable = this.props.disable;
        var classString = !disable ?  "radio" :  "radio disabled";
        return (
            <div className={classString}>
                <label className={this.props.classType}>
                    <input type="radio" name="optionsRadios" id={this.props.index} value={this.props.choice} onChange={this.handleClick} disabled={disable} />
                    {this.props.choice}
                </label>
            </div>
        );
    }
} );

module.exports = RadioInput;