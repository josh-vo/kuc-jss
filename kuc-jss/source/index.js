import {Button, Attachment, Alert, Label, ColorPicker} from '@kintone/kintone-ui-component/esm/js'
var colorPicker = new ColorPicker({color: '#FF0000'});
(function () {
  kintone.events.on("app.record.index.show", function () {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    // var attachment = new Attachment({files: [{name: 'test_1', size: 12345}]});
    // kintoneSpaceElement.appendChild(attachment.render());
    // var checkbox = new CheckBox({
    //   items: [
    //     {
    //       label: 'Orange',
    //       value: 'Orange',
    //       isDisabled: false
    //     },
    //     {
    //       label: 'Banana',
    //       value: 'Banana',
    //       isDisabled: true
    //     },
    //     {
    //       label: 'Lemon',
    //       value: 'Lemon',
    //       isDisabled: true
    //     },
    //   ],
    //   value: ['Orange', 'Banana']
    // });
    // kintoneSpaceElement.appendChild(checkbox.render());
    // var button = new Button({text: 'button', type: 'submit'});
    // kintoneSpaceElement.appendChild(button.render());
    // var alert = new Alert({text: 'Alert', type: 'error'});
    // kintoneSpaceElement.appendChild(alert.render());
    // var label = new Label({
    //   text: 'Name',
    //   textColor: '',
    //   backgroundColor: '',
    //   isRequired: true
    // });
    // kintoneSpaceElement.appendChild(label.render());
    kintoneSpaceElement.appendChild(colorPicker.render());
  });
})();