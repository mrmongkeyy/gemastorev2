const view = require('./view');
const fm = require('./fileH');
const db = require('./firebase');
const moreinfo = require('./info');
const handleRegis = require('./newuserhandler')
const emailVerifier = require('./emailVerifier');
const loginhandler = require('./loginhandler');
const sendotphandler = require('./otphandler');
const adminpanelhandler = require('./adminpanel');
const handlepaymentcallback = require('./paymentcallbackhandler');
const transactionChecker = require('./transactionchecker');
const changedatauserhandler = require('./datauserchanger');
const topupuserhandler = require('./topupuserhandler');
const handlepaymentcallbackdeposit = require('./paymentcallbackhandlerdeposit');
const sessionUpdater = require('./updateSession');
module.exports = [
	{
		mM:'get',
		'/'(req,res){
			view.go('index',req,res);
		}
	},
	{
		mM:'get',
		'/admin'(req,res){
			view.go('admin',req,res);
		}
	},
	{
		mM:'post',
		'/admin'(req,res){
			adminpanelhandler(req,res,db);
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
			moreinfo('pricelist',req,res,db);
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
			moreinfo('order',req,res,db);
		}
	},
	{
		mM:'get',
		'/check'(req,res){
			transactionChecker(req,res,db);
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
	},
	{
		mM:'post',
		'/sendotp'(req,res){
			sendotphandler(req,res,db);
		}
	},
	{
		mM:'post',
		'/paymentcallback'(req,res){
			handlepaymentcallback(req,res,db);
		}
	},
	{
		mM:'post',
		'/depositpaymentcallback'(req,res){
			handlepaymentcallbackdeposit(req,res,db);
		}
	},
	{
		mM:'post',
		'/newuserdata'(req,res){
			changedatauserhandler(req,res,db);
		}
	},
	{
		mM:'post',
		'/topupuser'(req,res){
			topupuserhandler(req,res,db);
		}
	},
	{
		mM:'post',
		'/updateSession'(req,res){
			sessionUpdater(req,res,db);
		}
	}
];
