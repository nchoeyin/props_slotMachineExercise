class Machine extends React.Component {
    render() {
        const {s1,s2,s3}= this.props;
        const winner = (s1==s2)&&(s2==s3);
        return (
        <div>
            <div>{s1}{s2}{s3}</div>
            <p>{winner?'Winner!':'loser!'}</p>
        </div>
        );
    }
}