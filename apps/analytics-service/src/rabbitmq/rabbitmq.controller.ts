import { EventPattern, Payload } from "@nestjs/microservices";
import { RabbitMQMessage } from "./RabbitMQMessage";
import { Controller } from "@nestjs/common";

@Controller("rabbitmq-controller")
export class RabbitMQController {
  @EventPattern("main.topic")
  async onMainTopic(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {}
}
