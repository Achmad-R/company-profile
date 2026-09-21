import Container from "@/components/ui/Container";

export default function SignalDivider() {
  return (
    <div aria-hidden="true" data-signal-divider>
      <Container>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan/70" />
          <span className="h-px flex-1 bg-border" />
        </div>
      </Container>
    </div>
  );
}
