var React = require('react');
var ReactDOM = require('react-dom');
var SignaturePad = require('signature_pad');

var SignatureArea = React.createClass({
	componentDidMount: function (){
		this.signaturePad = new SignaturePad(ReactDOM.findDOMNode(this.refs.signaturecanvas), {
    		penColor: "#6B6B6B",
	  		backgroundColor: "#FFFFFF"
		});
	},
	__undo: function (){
		var data = this.signaturePad.toData();
		if (data) {
		    data.pop(); // remove the last dot or line
		    this.signaturePad.fromData(data);
		}
	},
	__reset: function (){
		zn.confirm('重新签名将清空已存在内容, 确认提交？','提示', function (){
			this.signaturePad.clear();
		}.bind(this));
	},
	getValue: function (){
		return this.signaturePad.toDataURL();
	},
	render: function (){
		return (
			<div className="adinstall-index-shopstaff-signature-area">
				<div className="title">电子签名</div>
				<canvas ref="signaturecanvas" className="signature-pad" width={340} height={300}></canvas>
				<div className="adinstall-btns">
					<span onClick={this.__undo} className="btn">回撤</span>
					<span onClick={this.__reset} className="btn danger">重新签名</span>
				</div>
			</div>
		);
	}
});

module.exports = SignatureArea;
