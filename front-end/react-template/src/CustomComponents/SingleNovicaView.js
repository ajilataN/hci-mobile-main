import React from "react"
import axios from "axios"

class SingleNovicaView extends React.Component {
  constructor(props){
    super(props)
    this.state={
      novica:{}
    }
  }

  QSetViewInParent = (obj)=> {
    this.props.QUpdateView(obj)
  }

  QDeleteNovica = () =>{
    axios.delete("http://127.0.0.1:5999/novice/"+this.props.id)
    .then(res=>{
      console.log("Deleted from database...")
    }).catch(err=>{
      console.log(err)
    }) 

    this.QSetViewInParent({page:"novice"})
  }

  componentDidMount(){
    axios.get("http://127.0.0.1:5999/novice/"+this.props.id)
    .then(res=>{
      this.setState({
        novica: res.data
      })
    }).catch(err=>{
      console.log(err)
    }) 
   }

  render() {
    let novica = this.state.novica
    let isEmpty = Object.keys(novica).length === 0;
    console.log(novica)
    return (
      <div className="card" style={{ margin: "10px" }}>
        {!isEmpty ? 
          <div>
            <h5 className="card-header">{novica.title}</h5>
            <div className="card-body">
              <h5 className="card-title">{novica.slug}</h5>
              <p className="card-text">{novica.text}</p>
              <button style={{margin:5}} onClick={()=>this.QDeleteNovica()}  className="btn btn-danger">Delete</button>
              <button style={{margin:5}} onClick={()=>this.QSetViewInParent({page:"novice"})}  className="btn btn-primary">Return news</button>
            </div>
          </div>
          : "Loading---"}
    </div>
    );
  }
}
export default SingleNovicaView;
