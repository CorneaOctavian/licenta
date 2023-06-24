import { useList } from "@pankod/refine-core";
import { Typography,Box } from "@pankod/refine-mui";
import { AgentCard } from "components";









const Agents = () => {
  
  const { data, isLoading, isError } = useList({ resource: "users" });
  
  const allAgents = data?.data ?? [];
  
  
  return (
            <Box>
                <Typography fontSize={25} fontWeight={700} color="#11142d">
                    Toti agentii
                </Typography>
    
                <Box
                    mt="20px"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        backgroundColor: "#fcfcfc",
                    }}
                >
                    {allAgents.map((agent) => (
                        <AgentCard
                            key={agent._id}
                            id={agent._id}
                            name={agent.name}
                            email={agent.email}
                            avatar={agent.avatar}
                            noOfProperties={agent.AllProperties.length}
                        />
                    ))}
                </Box>
            </Box>


  );
}

export default Agents