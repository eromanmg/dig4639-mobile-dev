import "./index.css"

class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
<<<<<<< HEAD
        checkbox.addEventListener("change", this.onClick)
=======
        checkbox.addEventListener("change",this.onClick);

>>>>>>> f5bd81462727dd54f2ab2a0e49a690edec7ebe49
        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";
    }
<<<<<<< HEAD
    onClick(e){
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked);

    }
render() {

    return this.element;
  }
}
=======
    onClick(e) {
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked);
    }
    render() {
        return this.element;
    }
}

>>>>>>> f5bd81462727dd54f2ab2a0e49a690edec7ebe49
export default Task;