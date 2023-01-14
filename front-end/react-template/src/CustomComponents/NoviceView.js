import React from "react"
import axios from "axios"

class NoviceView extends React.Component {
  constructor(props){
    super(props)
    this.state={
      novice:[]
    }
  }

  QSetViewInParent = (obj)=>{
    this.props.QUpdateView(obj)
  }

  componentDidMount(){
    axios.get("http://127.0.0.1:5999/novice")
    .then(res=>{
      console.log(res.data)
      this.setState({
        novice: res.data
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    let novice = this.state.novice
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "10px" }}>
        {novice.length > 0 ?
          novice.map(novica=>{
            return(
              <div className="col" key={novica._id}>
              <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{novica.title}</h5>
                    <p className="card-text">{novica.slug}</p>
                  </div>
                  <button onClick={() => this.QSetViewInParent({ page: "novica", id: novica._id})} style={{ margin: "10px" }} className="btn btn-primary bt">
                    Read more
                  </button>
              </div>
            </div>
            )
          })
          :
           <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
       
      </div>
    );
  }
}
export default NoviceView;
