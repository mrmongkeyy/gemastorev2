const view = require('./view');
const fm = require('./fileH');
const db = require('./firebase');
const moreinfo = require('./info');
const handleRegis = require('./newuserhandler')
const emailVerifier = require('./emailVerifier');
const loginhandler = require('./loginhandler');
module.exports = [
	{
		mM:'get',
		'/'(req,res){
			view.go('index',req,res);
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
		'/styles'(req,res){
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
			moreinfo('pricelist',req,res);
		}
	},
	{
		mM:'get',
		'/bananastore'(req,res){
			view.go('bananastore',req,res);
		}
	},
	{
		mM:'post',
		'/order'(req,res){
			moreinfo('order',req,res);
		}
	},
	{
		mM:'get',
		'/check'(req,res){
			moreinfo('orderCheck',req,res);
		}
	},
	{
		mM:'post',
		'/login'(req,res){
			loginhandler(req,res,db);
		}
	},
	{
		mM:'post',
		'/newfriendscome'(req,res){
			handleRegis(req,res,db);
		}
	},
	{
		mM:'get',
		'/verifymyaccount'(req,res){
			emailVerifier(req,res,db);
		}
	}
];
