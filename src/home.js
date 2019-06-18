// import React,{Component} from 'react';
// import * as mdc from 'material-components-web';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import './home.css';
// import  home from './home';
// import score from './score';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// class Home extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			match: [],
// 			isLoaded: false,
// 		}
// 	}
// 	componentDidMount(){
// 		console.log("data of live score");
// 		fetch("https://cricapi.com/api/cricket?apikey=VuyDMPX3CHOT2xGg9Aqk1PyVqRm1")
// 		.then(res => res.json())
// 		.then(json =>{
// 			this.setState({
// 				isLoaded: true,
// 				match: json.data,
// 			})
// 		})
// 	}
// 	render(){
// 		const {isLoaded,match} = this.state;
// 		console.log("matches of that day",match);
// 		if(!isLoaded){
// 			return (<div>Loading.........</div>)
// 		}else if (match && match.length>0){
// 			return(
// 				// Header
// 				<div className="header" >
// 				<h1>Cricbuzz Web_Application</h1>
// 				<div className="mdc-layout-grid">
// 				<div className="mdc-layout-grid__inner" >
// 				{match.map(item=>{

// 					return <div className="mdc-layout-grid__cell--span-3"
// 					style={{opacity: 1, transform:`translate3d(0,0px,0)`}}
// 					ref={ref => this.cardRef = ref}
// 					id={item.unique_id}
// 					key={item.unique_id}>
// 					<div className="card">
// 					<div className='mdc-card__primary-action ripple'>
// 					<div className="information">
// 					<div className="value">{item.title}</div>
// 					<div className="mdc-button__label">{item.description}</div>
// 					</div>
// 					</div>
// 					</div>
// 					</div>

// 				})}
// 				</div>
// 				</div>
// 				<button>
// 				<Link to="/score">Live Updates</Link>
// 				</button>
// 				</div>
// 				)

// 		}else{
// 			return (<div>Loading.........</div>);
		
// 		}

// 	}

// }
// export default Home;

import React,{Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './home.css';
// import  home from './home';
// import score from './score';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import player from './player';
import login from './login';
import score from './score';
import loader from './loader.gif';
// import loader from './cricketlogo.gif';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import auth from "./auth";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import  propservice from "./propService.js";

import AOS from 'aos';

const InnerHTML = require('dangerously-set-inner-html');
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

let display_data;
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  constructor(props){
      super(props);
      // var today = new Date(),
      // date = moment(today).format("YYYY/MM/DD");
      this.state = {
          match: [],
          future_series: [],
          match_by_day: [],
          old_matches: [],
          score:[],
          match_id:[],
          stateTitle:[],
          value: 0,
          isLoaded: false,
      }
  }
  componentDidMount(){
      // console.log("data of live score");
      // propservice.getprop(this.props);
      fetch("https://cricapi.com/api/cricket?apikey=KxFEC7542kcdZoSrfyOH452AoL42")
      .then(res => res.json())
      .then(json =>{
          // console.log(json);
          this.setState({
              isLoaded: true,
              match: json.data,
          })
      })
        fetch("https://cricapi.com/api/matches?apikey=KxFEC7542kcdZoSrfyOH452AoL42")
        .then(res => res.json())
        .then(json =>{
          // console.log(json);
          this.setState({
              isLoaded: true,
             future_series: json.matches,
          })
          // console.log(this.state.future_series);
      })
        fetch("https://cricapi.com/api/matchCalendar?apikey=KxFEC7542kcdZoSrfyOH452AoL42")
        .then(res => res.json())
        .then(json =>{
            // console.log(json);
        this.setState({
            isLoaded: true,
            match_by_day: json.data,
        })
        })

        // fetch("http://cricapi.com/api/cricket?apikey=35xllyx5K7bMzc5qcuas7W6Uzml2")
        // .then(res => res.json())
        // .then(json =>{
        //   this.setState({
        //     isLoaded:true,
        //     old_matches:json,
        //   })
          
        // })

        // console.log("match-id");
        // fetch("https://cricapi.com/api/fantasySummary?apikey=KxFEC7542kcdZoSrfyOH452AoL42&unique_id="+this.state.match.unique_id)
        // .then(res => res.json())
        // .then(json =>{
        //   console.log("match_id",json);
        //   this.setState({
        //     isLoaded:true,
        //     match_id:json,
        //   })
        // })
  }

    // loadData(){
    //   let s = 'asdsf'
    //   console.log("______________________________",this.state.score.length);
    //   if(this.state.score && this.state.score.length) display_data = this.state.score.map((item)=>{
    //     for(var i=0; i<=3; i++){          
    //       return(
    //         <p>
    //         {item.data.batting[i].scores[i]['4s']}
    //         </p>
    //         )
    //     }
    //   }
    //   )
    // }

    // formatDate(date) {
    //                 var d = new Date(date);
    //                 var hh = d.getHours();
    //                 var m = d.getMinutes();
    //                 var s = d.getSeconds();
    //                 var dd = "AM";
    //                 var h = hh;
    //                 if (h >= 12) {
    //                   h = hh - 12;
    //                   dd = "PM";
    //                 }
    //                 if (h == 0) {
    //                   h = 12;
    //                 }
    //                 m = m < 10 ? "0" + m : m;

    //                 s = s < 10 ? "0" + s : s;

    //                    // if you want 2 digit hours:
    //                   // h = h<10?"0"+h:h; 

    //                   var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

    //                   var replacement = h + ":" + m;
    //                   /* if you want to add seconds
    //                   replacement += ":"+s;  */
    //                   replacement += " " + dd;

    //                   return date.replace(pattern, replacement);
    //                 }

    logout(){
      console.log("logout1");
      // localStorage.removeItem("email");
      this.props.history.push("/");
      console.log("logout2");
    }

  render() {
    // let display_data;
    const { classes } = this.props;
    const { match,future_series,match_by_day,value,score,isLoaded } = this.state;
    // console.log("privious locaion",window.location);
    // console.log("live_match",match);
    // console.log("future_series",future_series);
    // console.log("match_by_day",match_by_day);
    AOS.init();

 if(!isLoaded){
      return(
      <div><img className="load" src={loader}></img></div>
      )
    }

    else if(isLoaded ){
    return (
      <Grid container spacing={12}>
    	<div className="main_container">
      <div className="main_heading">
      <Grid item item xs={12} md={9} className="left_class">
    	<p style={{color:"#3f50b5"}}>CricBuzz</p>
      </Grid>
      <Grid item xs={12} md={3} className="right_class">
      <Button title="Find Player" variant="contained" color="primary" className="players_btn">
      <Link to={"/player"}><span style={{textDecoration:'none'}}>Players</span></Link>
      </Button>
      <Button variant="contained" className="player_btn" onClick={this.logout}>
      <Link to={"/"}><span style={{textDecoration:'none',color:"black"}}>Logout</span></Link>
      </Button>
      </Grid>
      </div>
    	<div className="border_class">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="auto" indicatorColor="primary">
            <Tab label="Live Matches" />
            <Tab label="Score Board" />
            <Tab label="Current & Future series" />
            <Tab label="Match by Day" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
            {match.map(item=>{
                return (
                <div data-aos="fade-up" className="live_score_box">
                <div className="match1">
                <span dangerouslySetInnerHTML={{__html: item.title.split(" v ")[0]}}></span>
                <b> Vs </b><span dangerouslySetInnerHTML={{__html: item.title.split(" v ")[1]}}></span>
                </div>
                </div>
                )
            })}
        	</TabContainer>}

          {value === 1 &&<TabContainer>
            {match.map(item=>{
              // const matchTeam = item.title.split(" v ")[0];
              // console.log("team",matchTeam);
                return (
                  <div data-aos="fade-up" className="live_score_box">
                  <div className="match1">
                  <Grid container spacing={12}>

                  <Grid sm={9} md={9}>
                  <span dangerouslySetInnerHTML={{__html: item.title.split(" v ")[0]}}></span>
                  <b> Vs </b><span dangerouslySetInnerHTML={{__html: item.title.split(" v ")[1]}}></span>
                  </Grid>

                  <Grid sm={3} md={3}>
                  <Button title="Match Score" className="link_btn" variant="contained">
                  <Link to={"/score/"+item.unique_id}><span style={{textDecoration:'none',color:"black"}}>Score</span></Link>
                  </Button>
                  </Grid>

                  </Grid>
                  </div>
                  </div>
                )
            })}
          </TabContainer>}

        	{value === 2 && <TabContainer>
                    <div className="match1">
                    <Grid container spacing={12}>
                    <Grid item sm={2} md={2}>
                    <h4 style={{margin:0}}>Date &amp; Time</h4>
                    </Grid>
                    <Grid item sm={10} md={10}>
                    <h4 style={{margin:0}}>Match</h4>
                    </Grid>
                    </Grid>
                    </div>
                {future_series.map(item =>{
                  // console.log(item.dateTimeGMT, typeof item.dateTimeGMT);
                  // const date = item.dateTimeGMT.split('T')[0];
                  // const time = item.dateTimeGMT.split('T')[1];
                  // const time1 = time.split('Z')[0];
                  // const IST = time.split(':00.000')[0];
                  var GMT = new Date(item.dateTimeGMT);
                  var IST = GMT.toLocaleString();
                  // console.log("IST:",IST);
                  const time = IST.split(':')[0];
                  const time2 = IST.split(':')[1];
                  const date = IST.split(',')[0];

                  var dat = new Date(item.dateTimeGMT);
                  var options = {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                  };
                  var timeString = dat.toLocaleString('en-US', options);
                  // console.log("date:",date);
                  // console.log("timeString",timeString);
                  // console.log('date: ', date);
                  // console.log('time: ', time);
                  // console.log('time1: ', time1);
                  // console.log('IST: ', IST);
                  // console.log("formatDate:",this.formatDate(IST));
                    return(
                    <div data-aos="fade-up">
                    <Grid container spacing={12}>
                    <Grid item sm={2} md={2}>
                    <div className="match1">{date}, {timeString}</div>
                    </Grid>
                    <Grid item sm={10} md={10}>
                    <Grid container spacing={12}>
                    <Grid item sm={9}>
                    <div className="match1">{item["team-1"]} <b>Vs</b> {item["team-2"]} {item.type}
                    </div>
                    </Grid>
                    <Grid item sm={3} md={3}>
                    <Button title="Match Score" className="link_btn" variant="contained">
                    <Link to={"/score/"+item.unique_id}><span style={{textDecoration:'none',color:"black"}}>Score</span></Link>
                    </Button>
                    </Grid>
                    </Grid>
                    </Grid>
                    </Grid>
                    <hr />
                    </div>
                    )
                })}
        		</TabContainer>}
        	{value === 3 && <TabContainer>
                {match_by_day.map(item=>{
                  // const matchByDayDetail = item.name.split(" v ")[0];
                  // console.log("team",matchByDayDetail);
                    return(
                    <div data-aos="fade-up">
                    <Grid container spacing={12}>
                    <Grid item sm={2}>
                    <div className="match1">{item.date}</div>
                    </Grid>
                    <Grid item sm={10}>
                    <div className="match1">{item.name.split(" v ")[0]} <b>Vs</b> {item.name.split(" v ")[1]}</div>
                    <hr />
                    </Grid>
                    </Grid>
                    </div>
                    )
                })}
            </TabContainer>}
      </div>
      </div>
      </div>
      </Grid>
    );
    }
    else{
      return(
        <div>
          <center><h1>Sorry No Data Found</h1></center>
        </div>
        )
    }
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
