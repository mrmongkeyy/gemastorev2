const view = require('./view');
const fm = require('./fileH');
const moreinfo = require('./info');
module.exports = [
	{
		mM:'get',
		'/'(req,res){
			view.go('app',req,res);
		}
	},
	{
		mM:'get',
		'/scripts'(req,res){
			fm.do(req,res);
		}
	},
	{
		mM:'get',
		'/file'(req,res){
			fm.do(req,res);
		}
	},
	{
		mM:'get',
		'/info'(req,res){
			moreinfo(req,res);
		}
	},
	{
		mM:'get',
		'/bananastore'(req,res){
			view.go('bananastore',req,res);
		}
	}
];
