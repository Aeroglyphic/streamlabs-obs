import { IWidgetData, WidgetSettingsService } from './widget-settings';
import { WidgetType } from 'services/widgets';

export interface IMediaShareData extends IWidgetData {
}

export class ChatbotWidgetService extends WidgetSettingsService<IMediaShareData> {

  getWidgetType() {
    return WidgetType.MediaShare;
  }

  getVersion() {
    return 5;
  }

  getPreviewUrl() {
    alert('got preview url');
    return `https://${ this.getHost() }/widgets/chatbot/v1/${this.getWidgetToken()}?simulate=1`;
  }

  getDataUrl() {
    return `https://${this.getHost()}/api/v${this.getVersion()}/slobs/widget/media`;
  }

  protected tabs: any[] = [];

}