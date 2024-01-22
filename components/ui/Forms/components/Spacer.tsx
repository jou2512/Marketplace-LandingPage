type SpacerProps = {
    className?: string;
};

const Spacer: React.FC<SpacerProps> = ({ className }) => {
    return <div className={className}></div>;
};

// Verwendung:
// <Spacer className="mt-3" />

export default Spacer;