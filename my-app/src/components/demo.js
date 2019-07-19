import React from "react";

export default function NewCompoment() {
  return function(Component) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {};
      }
      render() {
        return (
          <div>
            <Component />
          </div>
        );
      }
    };
  };
}
